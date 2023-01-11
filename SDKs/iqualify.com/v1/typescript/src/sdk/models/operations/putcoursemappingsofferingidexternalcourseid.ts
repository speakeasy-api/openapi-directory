import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutCourseMappingsOfferingIdExternalCourseIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=externalCourseId" })
  externalCourseId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=offeringId" })
  offeringId: string;
}


export class PutCourseMappingsOfferingIdExternalCourseIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutCourseMappingsOfferingIdExternalCourseIdPathParams;
}


export class PutCourseMappingsOfferingIdExternalCourseIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  putCourseMappingsOfferingIdExternalCourseId200ApplicationJSONStrings?: string[];
}
