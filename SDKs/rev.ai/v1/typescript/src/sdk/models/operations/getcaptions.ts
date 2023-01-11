import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCaptionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetCaptionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=speaker_channel" })
  speakerChannel?: number;
}


export class GetCaptionsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept?: shared.AcceptCaptionEnum;
}


// GetCaptions404ApplicationProblemPlusJson
/** 
 * Problem details object returned on errors
**/
export class GetCaptions404ApplicationProblemPlusJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: number;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


// GetCaptions405ApplicationProblemPlusJson
/** 
 * Problem details object returned on errors
**/
export class GetCaptions405ApplicationProblemPlusJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: number;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


// GetCaptions406ApplicationProblemPlusJson
/** 
 * Problem details object returned on errors
**/
export class GetCaptions406ApplicationProblemPlusJson extends SpeakeasyBase {
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


// GetCaptions409ApplicationProblemPlusJson
/** 
 * Problem details object returned on errors
**/
export class GetCaptions409ApplicationProblemPlusJson extends SpeakeasyBase {
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


export class GetCaptionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCaptionsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetCaptionsQueryParams;

  @SpeakeasyMetadata()
  headers: GetCaptionsHeaders;
}


export class GetCaptionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getCaptions401ApplicationProblemPlusJsonAny?: any;

  @SpeakeasyMetadata()
  getCaptions404ApplicationProblemPlusJsonObject?: GetCaptions404ApplicationProblemPlusJson;

  @SpeakeasyMetadata()
  getCaptions405ApplicationProblemPlusJsonObject?: GetCaptions405ApplicationProblemPlusJson;

  @SpeakeasyMetadata()
  getCaptions406ApplicationProblemPlusJsonObject?: GetCaptions406ApplicationProblemPlusJson;

  @SpeakeasyMetadata()
  getCaptions409ApplicationProblemPlusJsonObject?: GetCaptions409ApplicationProblemPlusJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
