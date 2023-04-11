import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Message holding the formatted strings used in the renderer.
 */
export declare class RendererFormattedStrings extends SpeakeasyBase {
    /**
     * The tooltip text on an expandable chevron icon.
     */
    auditGroupExpandTooltip?: string;
    /**
     * Text link pointing to the Lighthouse scoring calculator. This link immediately follows a sentence stating the performance score is calculated from the perf metrics.
     */
    calculatorLink?: string;
    /**
     * The label for the initial request in a critical request chain.
     */
    crcInitialNavigation?: string;
    /**
     * The label for values shown in the summary of critical request chains.
     */
    crcLongestDurationLabel?: string;
    /**
     * Option in a dropdown menu that copies the Lighthouse JSON object to the system clipboard.
     */
    dropdownCopyJSON?: string;
    /**
     * Option in a dropdown menu that toggles the themeing of the report between Light(default) and Dark themes.
     */
    dropdownDarkTheme?: string;
    /**
     * Option in a dropdown menu that opens a full Lighthouse report in a print dialog.
     */
    dropdownPrintExpanded?: string;
    /**
     * Option in a dropdown menu that opens a small, summary report in a print dialog.
     */
    dropdownPrintSummary?: string;
    /**
     * Option in a dropdown menu that saves the current report as a new GitHub Gist.
     */
    dropdownSaveGist?: string;
    /**
     * Option in a dropdown menu that saves the Lighthouse report HTML locally to the system as a '.html' file.
     */
    dropdownSaveHTML?: string;
    /**
     * Option in a dropdown menu that saves the Lighthouse JSON object to the local system as a '.json' file.
     */
    dropdownSaveJSON?: string;
    /**
     * Option in a dropdown menu that opens the current report in the Lighthouse Viewer Application.
     */
    dropdownViewer?: string;
    /**
     * The label shown next to an audit or metric that has had an error.
     */
    errorLabel?: string;
    /**
     * The error string shown next to an erroring audit.
     */
    errorMissingAuditInfo?: string;
    /**
     * Label for button to create an issue against the Lighthouse GitHub project.
     */
    footerIssue?: string;
    /**
     * The title of the lab data performance category.
     */
    labDataTitle?: string;
    /**
     * The disclaimer shown under performance explaining that the network can vary.
     */
    lsPerformanceCategoryDescription?: string;
    /**
     * The heading shown above a list of audits that were not computerd in the run.
     */
    manualAuditsGroupTitle?: string;
    /**
     * The heading shown above a list of audits that do not apply to a page.
     */
    notApplicableAuditsGroupTitle?: string;
    /**
     * The heading for the estimated page load savings opportunity of an audit.
     */
    opportunityResourceColumnLabel?: string;
    /**
     * The heading for the estimated page load savings of opportunity audits.
     */
    opportunitySavingsColumnLabel?: string;
    /**
     * The heading that is shown above a list of audits that are passing.
     */
    passedAuditsGroupTitle?: string;
    /**
     * Descriptive explanation for emulation setting when emulating a generic desktop form factor, as opposed to a mobile-device like form factor.
     */
    runtimeDesktopEmulation?: string;
    /**
     * Descriptive explanation for emulation setting when emulating a Nexus 5X mobile device.
     */
    runtimeMobileEmulation?: string;
    /**
     * Descriptive explanation for emulation setting when no device emulation is set.
     */
    runtimeNoEmulation?: string;
    /**
     * Label for a row in a table that shows the version of the Axe library used
     */
    runtimeSettingsAxeVersion?: string;
    /**
     * Label for a row in a table that shows the estimated CPU power of the machine running Lighthouse. Example row values: 532, 1492, 783.
     */
    runtimeSettingsBenchmark?: string;
    /**
     * Label for a row in a table that describes the CPU throttling conditions that were used during a Lighthouse run, if any.
     */
    runtimeSettingsCPUThrottling?: string;
    /**
     * Label for a row in a table that shows in what tool Lighthouse is being run (e.g. The lighthouse CLI, Chrome DevTools, Lightrider, WebPageTest, etc).
     */
    runtimeSettingsChannel?: string;
    /**
     * Label for a row in a table that describes the kind of device that was emulated for the Lighthouse run. Example values for row elements: 'No Emulation', 'Emulated Desktop', etc.
     */
    runtimeSettingsDevice?: string;
    /**
     * Label for a row in a table that shows the time at which a Lighthouse run was conducted; formatted as a timestamp, e.g. Jan 1, 1970 12:00 AM UTC.
     */
    runtimeSettingsFetchTime?: string;
    /**
     * Label for a row in a table that describes the network throttling conditions that were used during a Lighthouse run, if any.
     */
    runtimeSettingsNetworkThrottling?: string;
    /**
     * Title of the Runtime settings table in a Lighthouse report. Runtime settings are the environment configurations that a specific report used at auditing time.
     */
    runtimeSettingsTitle?: string;
    /**
     * Label for a row in a table that shows the User Agent that was detected on the Host machine that ran Lighthouse.
     */
    runtimeSettingsUA?: string;
    /**
     * Label for a row in a table that shows the User Agent that was used to send out all network requests during the Lighthouse run.
     */
    runtimeSettingsUANetwork?: string;
    /**
     * Label for a row in a table that shows the URL that was audited during a Lighthouse run.
     */
    runtimeSettingsUrl?: string;
    /**
     * Descriptive explanation for a runtime setting that is set to an unknown value.
     */
    runtimeUnknown?: string;
    /**
     * The label that explains the score gauges scale (0-49, 50-89, 90-100).
     */
    scorescaleLabel?: string;
    /**
     * Label preceding a radio control for filtering the list of audits. The radio choices are various performance metrics (FCP, LCP, TBT), and if chosen, the audits in the report are hidden if they are not relevant to the selected metric.
     */
    showRelevantAudits?: string;
    /**
     * The label for the button to show only a few lines of a snippet
     */
    snippetCollapseButtonLabel?: string;
    /**
     * The label for the button to show all lines of a snippet
     */
    snippetExpandButtonLabel?: string;
    /**
     * This label is for a filter checkbox above a table of items
     */
    thirdPartyResourcesLabel?: string;
    /**
     * Descriptive explanation for environment throttling that was provided by the runtime environment instead of provided by Lighthouse throttling.
     */
    throttlingProvided?: string;
    /**
     * The label shown preceding important warnings that may have invalidated an entire report.
     */
    toplevelWarningsMessage?: string;
    /**
     * The disclaimer shown below a performance metric value.
     */
    varianceDisclaimer?: string;
    /**
     * Label for a button that opens the Treemap App
     */
    viewTreemapLabel?: string;
    /**
     * The heading that is shown above a list of audits that have warnings
     */
    warningAuditsGroupTitle?: string;
    /**
     * The label shown above a bulleted list of warnings.
     */
    warningHeader?: string;
}
