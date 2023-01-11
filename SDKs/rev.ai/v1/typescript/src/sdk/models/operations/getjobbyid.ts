import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetJobByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


// GetJobById404ApplicationProblemPlusJson
/** 
 * Problem details object returned on errors
**/
export class GetJobById404ApplicationProblemPlusJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: number;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class GetJobByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetJobByIdPathParams;
}


export class GetJobByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getJobById401ApplicationProblemPlusJsonAny?: any;

  @SpeakeasyMetadata()
  getJobById404ApplicationProblemPlusJsonObject?: GetJobById404ApplicationProblemPlusJson;

  @SpeakeasyMetadata()
  job?: shared.Job;

  @SpeakeasyMetadata()
  statusCode: number;
}
