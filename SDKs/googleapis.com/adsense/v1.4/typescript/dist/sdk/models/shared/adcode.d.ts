import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Successful response
 */
export declare class AdCode extends SpeakeasyBase {
    /**
     * The Auto ad code snippet. The ad code snippet.
     */
    adCode?: string;
    /**
     * The AMP Auto ad code snippet that goes in the body of an AMP page.
     */
    ampBody?: string;
    /**
     * The AMP Auto ad code snippet that goes in the head of an AMP page.
     */
    ampHead?: string;
    /**
     * Kind this is, in this case adsense#adCode.
     */
    kind?: string;
}
