import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A lightweight description of a file.
 */
export declare class ApigatewayApiConfigFile extends SpeakeasyBase {
    /**
     * The bytes that constitute the file.
     */
    contents?: string;
    /**
     * The file path (full or relative path). This is typically the path of the file when it is uploaded.
     */
    path?: string;
}
