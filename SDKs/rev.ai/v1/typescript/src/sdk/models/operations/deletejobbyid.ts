import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteJobByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


// DeleteJobById404ApplicationProblemPlusJson
/** 
 * Problem details object returned on errors
**/
export class DeleteJobById404ApplicationProblemPlusJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: number;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


// DeleteJobById409ApplicationProblemPlusJson
/** 
 * Problem details object returned on errors
**/
export class DeleteJobById409ApplicationProblemPlusJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowed_values" })
  allowedValues?: string[];

  @SpeakeasyMetadata({ data: "json, name=current_value" })
  currentValue?: string;

  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: number;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class DeleteJobByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteJobByIdPathParams;
}


export class DeleteJobByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deleteJobById401ApplicationProblemPlusJsonAny?: any;

  @SpeakeasyMetadata()
  deleteJobById404ApplicationProblemPlusJsonObject?: DeleteJobById404ApplicationProblemPlusJson;

  @SpeakeasyMetadata()
  deleteJobById409ApplicationProblemPlusJsonObject?: DeleteJobById409ApplicationProblemPlusJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
