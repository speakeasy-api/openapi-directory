import { SpeakeasyBase } from "../../../internal/utils";
export declare class StyleGuideUploadRequestStyleguides extends SpeakeasyBase {
    content: Uint8Array;
    styleguides: string;
}
export declare class StyleGuideUploadRequest1 extends SpeakeasyBase {
    /**
     * You can only add one style guide, even though the name suggests multiple style guides. This may be updated in the future to support multiple style guides.
     */
    styleguides: StyleGuideUploadRequestStyleguides;
}
