import { SpeakeasyBase } from "../../../internal/utils";
export declare class GlossaryUploadRequestGlossaries extends SpeakeasyBase {
    content: Uint8Array;
    glossaries: string;
}
export declare class GlossaryUploadRequest1 extends SpeakeasyBase {
    /**
     * You can only add one glossary, even though the name suggests multiple glossaries. This may be updated in the future to support multiple glossaries.
     */
    glossaries: GlossaryUploadRequestGlossaries;
}
