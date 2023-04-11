import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The GitHub Pages deployment status.
 */
export declare class PageDeployment extends SpeakeasyBase {
    /**
     * The URI to the deployed GitHub Pages.
     */
    pageUrl: string;
    /**
     * The URI to the deployed GitHub Pages preview.
     */
    previewUrl?: string;
    /**
     * The URI to monitor GitHub Pages deployment status.
     */
    statusUrl: string;
}
