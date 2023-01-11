import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetListOfJobsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=starting_after" })
  startingAfter?: string;
}


// GetListOfJobs400ApplicationProblemPlusJson
/** 
 * Problem details object returned on errors
**/
export class GetListOfJobs400ApplicationProblemPlusJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=parameters" })
  parameters?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: number;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class GetListOfJobsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetListOfJobsQueryParams;
}


export class GetListOfJobsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getListOfJobs400ApplicationProblemPlusJsonObject?: GetListOfJobs400ApplicationProblemPlusJson;

  @SpeakeasyMetadata()
  getListOfJobs401ApplicationProblemPlusJsonAny?: any;

  @SpeakeasyMetadata({ elemType: shared.Job })
  jobs?: shared.Job[];

  @SpeakeasyMetadata()
  statusCode: number;
}
