import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudContactcenterinsightsV1AnalysisResult } from "./googlecloudcontactcenterinsightsv1analysisresult";
import { GoogleCloudContactcenterinsightsV1AnnotatorSelector } from "./googlecloudcontactcenterinsightsv1annotatorselector";



// GoogleCloudContactcenterinsightsV1Analysis
/** 
 * The analysis resource.
**/
export class GoogleCloudContactcenterinsightsV1Analysis extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=analysisResult" })
  analysisResult?: GoogleCloudContactcenterinsightsV1AnalysisResult;

  @SpeakeasyMetadata({ data: "json, name=annotatorSelector" })
  annotatorSelector?: GoogleCloudContactcenterinsightsV1AnnotatorSelector;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=requestTime" })
  requestTime?: string;
}


// GoogleCloudContactcenterinsightsV1AnalysisInput
/** 
 * The analysis resource.
**/
export class GoogleCloudContactcenterinsightsV1AnalysisInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=analysisResult" })
  analysisResult?: GoogleCloudContactcenterinsightsV1AnalysisResult;

  @SpeakeasyMetadata({ data: "json, name=annotatorSelector" })
  annotatorSelector?: GoogleCloudContactcenterinsightsV1AnnotatorSelector;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
