import { SpeakeasyBase } from "../../../internal/utils";
export declare class AccountGlossaryUploadRequest extends SpeakeasyBase {
    /**
     * Glossary file. Currently supported formats: .xlsx, .tbx
     */
    glossary: Uint8Array;
}
