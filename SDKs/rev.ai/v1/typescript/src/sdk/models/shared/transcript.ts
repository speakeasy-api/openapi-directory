import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum TranscriptMonologuesElementsTypeEnum {
    Text = "text",
    Punct = "punct",
    Unknown = "unknown"
}


export class TranscriptMonologuesElements extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=confidence" })
  confidence?: number;

  @SpeakeasyMetadata({ data: "json, name=ts" })
  ts?: number;

  @SpeakeasyMetadata({ data: "json, name=ts_end" })
  tsEnd?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: TranscriptMonologuesElementsTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class TranscriptMonologues extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=elements", elemType: TranscriptMonologuesElements })
  elements?: TranscriptMonologuesElements[];

  @SpeakeasyMetadata({ data: "json, name=speaker" })
  speaker?: number;
}


// Transcript
/** 
 * Rev.ai Transcript Model
 * ***
 * Note: properties are not displayed in the returned object if they are null
 * 
 * Jobs with skip_diarization set to true will only show a single speaker for the entire duration of the transcript.
 * 
**/
export class Transcript extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=monologues", elemType: TranscriptMonologues })
  monologues?: TranscriptMonologues[];
}
