import { SpeakeasyBase } from "../../../internal/utils";
export declare class AccountGlossaryUploadRequestGlossary extends SpeakeasyBase {
    content: Uint8Array;
    glossary: string;
}
export declare class AccountGlossaryUploadRequest1 extends SpeakeasyBase {
    /**
     * Glossary file. Currently supported formats: .xlsx, .tbx
     */
    glossary: AccountGlossaryUploadRequestGlossary;
}
