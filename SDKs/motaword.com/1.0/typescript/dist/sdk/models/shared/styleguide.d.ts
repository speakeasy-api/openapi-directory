import { SpeakeasyBase } from "../../../internal/utils";
import { DocumentLinks } from "./documentlinks";
/**
 * Style guide model
 */
export declare class StyleGuide extends SpeakeasyBase {
    id?: number;
    links?: DocumentLinks;
    name?: string;
    /**
     * Unix epoch time
     */
    uploadedAt?: number;
}
