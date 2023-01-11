import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum IngestionResultStatusEnum {
    Error = "Error",
    SuccessWarning = "SuccessWarning",
    Success = "Success"
}


// IngestionResult
/** 
 * This class defines the IngestionResult on the Publish API
**/
export class IngestionResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  id?: string;

  @SpeakeasyMetadata()
  ignoredProperties?: Record<string, Record<string, any>>;

  @SpeakeasyMetadata()
  invalidProperties?: Record<string, Record<string, any>>;

  @SpeakeasyMetadata()
  invalidValues?: Record<string, Record<string, any>>;

  @SpeakeasyMetadata()
  missingProperties?: Record<string, Record<string, any>>;

  @SpeakeasyMetadata()
  status: IngestionResultStatusEnum;

  @SpeakeasyMetadata()
  unknownProperties?: Record<string, Record<string, any>>;
}
