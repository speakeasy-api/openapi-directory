import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Message containing the configuration settings for the Lighthouse run.
 */
export declare class ConfigSettings extends SpeakeasyBase {
    /**
     * How Lighthouse was run, e.g. from the Chrome extension or from the npm module.
     */
    channel?: string;
    /**
     * The form factor the emulation should use. This field is deprecated, form_factor should be used instead.
     */
    emulatedFormFactor?: string;
    /**
     * How Lighthouse should interpret this run in regards to scoring performance metrics and skipping mobile-only tests in desktop.
     */
    formFactor?: string;
    /**
     * The locale setting.
     */
    locale?: string;
    /**
     * List of categories of audits the run should conduct.
     */
    onlyCategories?: any;
}
