import { SpeakeasyBase } from "../../../internal/utils";
import { AvailableApiVersion } from "./availableapiversion";
/**
 * Attributes for Base URL Info endpoint
**/
export declare class BaseInfoAttributes extends SpeakeasyBase {
    apiVersion: string;
    availableApiVersions: AvailableApiVersion[];
    availableEndpoints: string[];
    entryTypesByFormat: Record<string, string[]>;
    formats?: string[];
    isIndex?: boolean;
}
