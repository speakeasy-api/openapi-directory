import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Download a custom font to use with the HTML asset type, using the font name in the CSS or font tag. See our [custom fonts](https://shotstack.io/learn/html-custom-fonts/) getting started guide for more details.
 */
export declare class Font extends SpeakeasyBase {
    /**
     * The URL of the font file. The URL must be publicly accessible or include credentials.
     */
    src: string;
}
