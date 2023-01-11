import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UploadUserProfilePicturePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: number;
}


export class UploadUserProfilePictureRequestBodyProfilePicture extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=profile_picture" })
  profilePicture: string;
}


export class UploadUserProfilePictureRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  profilePicture: UploadUserProfilePictureRequestBodyProfilePicture;
}


export class UploadUserProfilePictureSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  mwoAuth: shared.SchemeMwoAuth;
}


export class UploadUserProfilePictureRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UploadUserProfilePicturePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: UploadUserProfilePictureRequestBody;

  @SpeakeasyMetadata()
  security: UploadUserProfilePictureSecurity;
}


export class UploadUserProfilePictureResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  operationStatus?: shared.OperationStatus;

  @SpeakeasyMetadata()
  statusCode: number;
}
