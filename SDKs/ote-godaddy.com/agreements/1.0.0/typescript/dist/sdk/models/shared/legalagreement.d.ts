import { SpeakeasyBase } from "../../../internal/utils";
export declare class LegalAgreement extends SpeakeasyBase {
    /**
     * Unique identifier for the legal agreement
     */
    agreementKey: string;
    /**
     * Contents of the legal agreement, suitable for embedding
     */
    content: string;
    /**
     * Title of the legal agreement
     */
    title: string;
    /**
     * URL to a page containing the legal agreement
     */
    url?: string;
}
