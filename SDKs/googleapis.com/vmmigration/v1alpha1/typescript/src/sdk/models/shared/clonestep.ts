import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CloneStep
/** 
 * CloneStep holds information about the clone step progress.
**/
export class CloneStep extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=adaptingOs" })
  adaptingOs?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=instantiatingMigratedVm" })
  instantiatingMigratedVm?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=preparingVmDisks" })
  preparingVmDisks?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;
}
