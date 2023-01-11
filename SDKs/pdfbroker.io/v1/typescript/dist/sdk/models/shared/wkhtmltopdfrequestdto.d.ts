import { SpeakeasyBase } from "../../../internal/utils";
/**
 * WkHtmlToPdfRequestDto is the data transfer object for generating a pdf using wkhtmltopdf;
**/
export declare class WkHtmlToPdfRequestDto extends SpeakeasyBase {
    htmlBase64String?: string;
    resources?: Record<string, string>;
    url?: string;
    wkHtmlToPdfArguments?: Record<string, string>;
}
