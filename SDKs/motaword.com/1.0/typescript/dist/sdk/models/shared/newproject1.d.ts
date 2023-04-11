import { SpeakeasyBase } from "../../../internal/utils";
export declare class NewProjectDocuments extends SpeakeasyBase {
    content: Uint8Array;
    documents: string;
}
export declare class NewProjectGlossaries extends SpeakeasyBase {
    content: Uint8Array;
    glossaries: string;
}
export declare class NewProjectStyleguides extends SpeakeasyBase {
    content: Uint8Array;
    styleguides: string;
}
export declare class NewProject1 extends SpeakeasyBase {
    /**
     * Optional. If you provide a callback URL, we will send POST callbacks when the status of the current project is changed. Possible status changes are, 'translated', 'proofread', 'completed'.
     */
    callbackUrl?: string;
    /**
     * Coupon code to redeem
     */
    couponCode?: string;
    /**
     * Optional. This is a consistent custom data parameter that will be given to you in the response across every request of this project model. Values should be provided like this, custom[my_key] = my_value.
     */
    custom?: string[];
    /**
     * Optional. You can add as many files as you want in documents[] parameter. Or you add your documents later in separate calls.
     */
    documents?: NewProjectDocuments;
    /**
     * Optional. Only one glossary is supported at the moment.
     */
    glossaries?: NewProjectGlossaries;
    sourceLanguage?: string;
    /**
     * Optional. You can add as many files as you want in styleguides[] parameter. Or you add your style guides later in separate calls.
     */
    styleguides?: NewProjectStyleguides;
    targetLanguages?: string[];
}
