import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FeatureState } from "./featurestate";



export class ScopeFeatureState extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: FeatureState;
}
