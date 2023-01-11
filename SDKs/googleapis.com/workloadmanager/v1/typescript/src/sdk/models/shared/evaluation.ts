import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceFilter } from "./resourcefilter";
import { ResourceStatus } from "./resourcestatus";



// Evaluation
/** 
 * Message describing Evaluation object
**/
export class Evaluation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceFilter" })
  resourceFilter?: ResourceFilter;

  @SpeakeasyMetadata({ data: "json, name=resourceStatus" })
  resourceStatus?: ResourceStatus;

  @SpeakeasyMetadata({ data: "json, name=ruleNames" })
  ruleNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=ruleVersions" })
  ruleVersions?: string[];

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}


// EvaluationInput
/** 
 * Message describing Evaluation object
**/
export class EvaluationInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceFilter" })
  resourceFilter?: ResourceFilter;

  @SpeakeasyMetadata({ data: "json, name=resourceStatus" })
  resourceStatus?: ResourceStatus;

  @SpeakeasyMetadata({ data: "json, name=ruleNames" })
  ruleNames?: string[];
}
