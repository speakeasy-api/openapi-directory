import { SpeakeasyBase } from "../../../internal/utils";
export declare enum IngestionResultStatusEnum {
    Error = "Error",
    SuccessWarning = "SuccessWarning",
    Success = "Success"
}
/**
 * This class defines the IngestionResult on the Publish API
**/
export declare class IngestionResult extends SpeakeasyBase {
    id?: string;
    ignoredProperties?: Record<string, Record<string, any>>;
    invalidProperties?: Record<string, Record<string, any>>;
    invalidValues?: Record<string, Record<string, any>>;
    missingProperties?: Record<string, Record<string, any>>;
    status: IngestionResultStatusEnum;
    unknownProperties?: Record<string, Record<string, any>>;
}
