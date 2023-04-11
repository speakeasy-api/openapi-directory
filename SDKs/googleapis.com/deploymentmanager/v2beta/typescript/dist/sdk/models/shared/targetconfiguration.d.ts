import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigFile } from "./configfile";
import { ImportFile } from "./importfile";
export declare class TargetConfiguration extends SpeakeasyBase {
    config?: ConfigFile;
    /**
     * Specifies any files to import for this configuration. This can be used to import templates or other files. For example, you might import a text file in order to use the file in a template.
     */
    imports?: ImportFile[];
}
