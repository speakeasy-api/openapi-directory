import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTranscriptByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetTranscriptByIdHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept?: shared.AcceptTranscriptEnum;
}


// GetTranscriptById404ApplicationProblemPlusJson
/** 
 * Problem details object returned on errors
**/
export class GetTranscriptById404ApplicationProblemPlusJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: number;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


// GetTranscriptById406ApplicationProblemPlusJson
/** 
 * Problem details object returned on errors
**/
export class GetTranscriptById406ApplicationProblemPlusJson extends SpeakeasyBase {
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


// GetTranscriptById409ApplicationProblemPlusJson
/** 
 * Problem details object returned on errors
**/
export class GetTranscriptById409ApplicationProblemPlusJson extends SpeakeasyBase {
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


export class GetTranscriptByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTranscriptByIdPathParams;

  @SpeakeasyMetadata()
  headers: GetTranscriptByIdHeaders;
}


export class GetTranscriptByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getTranscriptById401ApplicationProblemPlusJsonAny?: any;

  @SpeakeasyMetadata()
  getTranscriptById404ApplicationProblemPlusJsonObject?: GetTranscriptById404ApplicationProblemPlusJson;

  @SpeakeasyMetadata()
  getTranscriptById406ApplicationProblemPlusJsonObject?: GetTranscriptById406ApplicationProblemPlusJson;

  @SpeakeasyMetadata()
  getTranscriptById409ApplicationProblemPlusJsonObject?: GetTranscriptById409ApplicationProblemPlusJson;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  transcript?: shared.Transcript;

  @SpeakeasyMetadata()
  transcriptText?: string;
}
