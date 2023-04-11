import { SpeakeasyBase } from "../../../internal/utils";
export declare class PayorLogoRequestLogo extends SpeakeasyBase {
    content: Uint8Array;
    logo: string;
}
/**
 * Image file to upload
 */
export declare class PayorLogoRequest extends SpeakeasyBase {
    logo?: PayorLogoRequestLogo;
}
