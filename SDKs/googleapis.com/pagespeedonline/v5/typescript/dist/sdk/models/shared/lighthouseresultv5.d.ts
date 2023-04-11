import { SpeakeasyBase } from "../../../internal/utils";
import { Categories } from "./categories";
import { CategoryGroupV5 } from "./categorygroupv5";
import { ConfigSettings } from "./configsettings";
import { Environment } from "./environment";
import { I18n } from "./i18n";
import { LhrEntity } from "./lhrentity";
import { LighthouseAuditResultV5 } from "./lighthouseauditresultv5";
import { RuntimeError } from "./runtimeerror";
import { StackPack } from "./stackpack";
import { Timing } from "./timing";
/**
 * The Lighthouse result object.
 */
export declare class LighthouseResultV5 extends SpeakeasyBase {
    /**
     * Map of audits in the LHR.
     */
    audits?: Record<string, LighthouseAuditResultV5>;
    /**
     * The categories in a Lighthouse run.
     */
    categories?: Categories;
    /**
     * Map of category groups in the LHR.
     */
    categoryGroups?: Record<string, CategoryGroupV5>;
    /**
     * Message containing the configuration settings for the Lighthouse run.
     */
    configSettings?: ConfigSettings;
    /**
     * Entity classification data.
     */
    entities?: LhrEntity[];
    /**
     * Message containing environment configuration for a Lighthouse run.
     */
    environment?: Environment;
    /**
     * The time that this run was fetched.
     */
    fetchTime?: string;
    /**
     * URL displayed on the page after Lighthouse finishes.
     */
    finalDisplayedUrl?: string;
    /**
     * The final resolved url that was audited.
     */
    finalUrl?: string;
    /**
     * Screenshot data of the full page, along with node rects relevant to the audit results.
     */
    fullPageScreenshot?: any;
    /**
     * Message containing the i18n data for the LHR - Version 1.
     */
    i18n?: I18n;
    /**
     * The lighthouse version that was used to generate this LHR.
     */
    lighthouseVersion?: string;
    /**
     * URL of the main document request of the final navigation.
     */
    mainDocumentUrl?: string;
    /**
     * The original requested url.
     */
    requestedUrl?: string;
    /**
     * List of all run warnings in the LHR. Will always output to at least `[]`.
     */
    runWarnings?: any[];
    /**
     * Message containing a runtime error config.
     */
    runtimeError?: RuntimeError;
    /**
     * The Stack Pack advice strings.
     */
    stackPacks?: StackPack[];
    /**
     * Message containing the performance timing data for the Lighthouse run.
     */
    timing?: Timing;
    /**
     * The user agent that was used to run this LHR.
     */
    userAgent?: string;
}
