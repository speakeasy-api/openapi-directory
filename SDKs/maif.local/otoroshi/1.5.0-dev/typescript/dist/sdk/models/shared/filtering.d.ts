import { SpeakeasyBase } from "../../../internal/utils";
export declare class Filtering extends SpeakeasyBase {
    /**
     * Excluding pattern
     */
    exclude?: Record<string, string>[];
    /**
     * Including pattern
     */
    include?: Record<string, string>[];
}
