import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteCourseMappingsOfferingIdExternalCourseIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=externalCourseId" })
  externalCourseId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=offeringId" })
  offeringId: string;
}


export class DeleteCourseMappingsOfferingIdExternalCourseIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteCourseMappingsOfferingIdExternalCourseIdPathParams;
}


export class DeleteCourseMappingsOfferingIdExternalCourseIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deleteCourseMappingsOfferingIdExternalCourseId200ApplicationJSONStrings?: string[];
}
