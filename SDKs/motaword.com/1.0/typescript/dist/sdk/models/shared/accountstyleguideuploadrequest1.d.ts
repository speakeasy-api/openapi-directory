import { SpeakeasyBase } from "../../../internal/utils";
export declare class AccountStyleGuideUploadRequestStyleguide extends SpeakeasyBase {
    content: Uint8Array;
    styleguide: string;
}
export declare class AccountStyleGuideUploadRequest1 extends SpeakeasyBase {
    /**
     * Style guide file. Currently supported formats: .pdf, .docx, .txt
     */
    styleguide: AccountStyleGuideUploadRequestStyleguide;
}
