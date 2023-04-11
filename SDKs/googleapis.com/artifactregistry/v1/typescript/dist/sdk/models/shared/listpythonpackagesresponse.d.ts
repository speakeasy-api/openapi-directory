import { SpeakeasyBase } from "../../../internal/utils";
import { PythonPackage } from "./pythonpackage";
/**
 * The response from listing python packages.
 */
export declare class ListPythonPackagesResponse extends SpeakeasyBase {
    /**
     * The token to retrieve the next page of artifacts, or empty if there are no more artifacts to return.
     */
    nextPageToken?: string;
    /**
     * The python packages returned.
     */
    pythonPackages?: PythonPackage[];
}
