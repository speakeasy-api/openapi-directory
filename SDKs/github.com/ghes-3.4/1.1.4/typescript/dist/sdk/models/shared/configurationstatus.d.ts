import { SpeakeasyBase } from "../../../internal/utils";
export declare class ConfigurationStatusProgress extends SpeakeasyBase {
    key: string;
    status: string;
}
/**
 * Response
 */
export declare class ConfigurationStatus extends SpeakeasyBase {
    progress?: ConfigurationStatusProgress[];
    status?: string;
}
