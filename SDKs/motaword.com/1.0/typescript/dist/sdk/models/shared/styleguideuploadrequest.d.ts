import { SpeakeasyBase } from "../../../internal/utils";
export declare class StyleGuideUploadRequest extends SpeakeasyBase {
    /**
     * You can only add one style guide, even though the name suggests multiple style guides. This may be updated in the future to support multiple style guides.
     */
    styleguides: Uint8Array;
}
