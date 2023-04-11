import { SpeakeasyBase } from "../../../internal/utils";
export declare class GlossaryUploadRequest extends SpeakeasyBase {
    /**
     * You can only add one glossary, even though the name suggests multiple glossaries. This may be updated in the future to support multiple glossaries.
     */
    glossaries: Uint8Array;
}
