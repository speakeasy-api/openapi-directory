import { SpeakeasyBase } from "../../../internal/utils";
import { JsonFileFormat } from "./jsonfileformat";
/**
 * Google Cloud Storage destination configuration
**/
export declare class GcsDestinationConfig extends SpeakeasyBase {
    avroFileFormat?: Record<string, any>;
    fileRotationInterval?: string;
    fileRotationMb?: number;
    jsonFileFormat?: JsonFileFormat;
    path?: string;
}
