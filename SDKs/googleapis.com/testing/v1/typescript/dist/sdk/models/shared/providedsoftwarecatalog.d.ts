import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The currently provided software environment on the devices under test.
 */
export declare class ProvidedSoftwareCatalog extends SpeakeasyBase {
    /**
     * A string representing the current version of AndroidX Test Orchestrator that is used in the environment. The package is available at https://maven.google.com/web/index.html#androidx.test:orchestrator.
     */
    androidxOrchestratorVersion?: string;
    /**
     * Deprecated: Use AndroidX Test Orchestrator going forward. A string representing the current version of Android Test Orchestrator that is used in the environment. The package is available at https://maven.google.com/web/index.html#com.android.support.test:orchestrator.
     */
    orchestratorVersion?: string;
}
