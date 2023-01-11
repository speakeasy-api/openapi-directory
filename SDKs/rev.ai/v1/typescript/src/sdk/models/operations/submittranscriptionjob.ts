import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SubmitTranscriptionJobMultipartFormDataMedia extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=media" })
  media: string;
}


export class SubmitTranscriptionJobMultipartFormData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  media?: SubmitTranscriptionJobMultipartFormDataMedia;

  @SpeakeasyMetadata({ data: "multipart_form, name=options;json=true" })
  options?: shared.SubmitJobOptions;
}


export class SubmitTranscriptionJobRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  submitJobMediaUrlOptions?: shared.SubmitJobMediaUrlOptions;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object?: SubmitTranscriptionJobMultipartFormData;
}


// SubmitTranscriptionJob400ApplicationProblemPlusJson
/** 
 * Problem details object returned on errors
**/
export class SubmitTranscriptionJob400ApplicationProblemPlusJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=parameters" })
  parameters?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: number;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class SubmitTranscriptionJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: SubmitTranscriptionJobRequests;
}


export class SubmitTranscriptionJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  job?: shared.Job;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  submitTranscriptionJob400ApplicationProblemPlusJsonObject?: SubmitTranscriptionJob400ApplicationProblemPlusJson;

  @SpeakeasyMetadata()
  submitTranscriptionJob401ApplicationProblemPlusJsonAny?: any;

  @SpeakeasyMetadata()
  submitTranscriptionJob413ApplicationProblemPlusJsonAny?: any;
}
