import { SpeakeasyBase } from "../../../internal/utils";
import { DocumentLinks } from "./documentlinks";
/**
 * Newly created glossary model.
 */
export declare class Glossary extends SpeakeasyBase {
    id?: number;
    links?: DocumentLinks;
    name?: string;
    /**
     * Unix epoch time
     */
    uploadedAt?: number;
}
