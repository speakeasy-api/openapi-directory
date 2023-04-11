import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BrowserBotRequestBody extends SpeakeasyBase {
    /**
     * Delay in seconds to wait before capturing any page data, executing selectors or JavaScript
     */
    delay?: number;
    /**
     * Execute JavaScript on the website. This parameter accepts JavaScript as either a string containing JavaScript or for sending multiple separate statements a JSON array or POST array can also be used. If a statement returns any value it will be returned in the 'exec-results' response. You can also use the following specially defined user interaction functions: <br> <br> <div> sleep(seconds); Just wait/sleep for the specified number of seconds. <br>click('selector'); Click on the first element matching the given selector. <br>focus('selector'); Focus on the first element matching the given selector. <br>keys('characters'); Send the specified keyboard characters. Use click() or focus() first to send keys to a specific element. <br>enter(); Send the Enter key. <br>tab(); Send the Tab key. <br> </div>
     */
    exec?: string[];
    /**
     * Ignore any TLS/SSL certificate errors and load the page anyway
     */
    ignoreCertificateErrors?: boolean;
    /**
     * Extract content from the page DOM using this selector. Commonly known as a CSS selector, you can find a good reference <a href="https://www.w3schools.com/cssref/css_selectors.asp">here</a>
     */
    selector?: string;
    /**
     * Timeout in seconds. Give up if still trying to load the page after this number of seconds
     */
    timeout?: number;
    /**
     * The URL to load
     */
    url: string;
    /**
     * Override the browsers default user-agent string with this one
     */
    userAgent?: string;
}
export declare class BrowserBotResponse extends SpeakeasyBase {
    /**
     * Your API request has been rejected. Check error code for details
     */
    apiError?: shared.APIError;
    browserBotResponse?: shared.BrowserBotResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
