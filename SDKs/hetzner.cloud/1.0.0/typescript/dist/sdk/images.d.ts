import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Images are blueprints for your VM disks. They can be of different types:
 *
 * @remarks
 *
 * ### System Images
 * Distribution Images maintained by us, e.g. “Ubuntu 20.04”
 *
 * ### Snapshot Images
 * Maintained by you, for example “Ubuntu 20.04 with my own settings”. These are billed per GB per month.
 *
 * ### Backup Images
 * Daily Backups of your Server. Will automatically be created for Servers which have backups enabled (`POST /servers/{id}/actions/enable_backup`)
 *
 * Bound to exactly one Server. If you delete the Server, you also delete all backups bound to it. You may convert backup Images to snapshot Images to keep them.
 *
 * These are billed at 20% of your instance price for 7 backup slots.
 *
 * ### App Images
 * Prebuild images with specific software configurations, e.g. “Wordpress”. All app images are created by us.
 *
 */
export declare class Images {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete an Image
     *
     * @remarks
     * Deletes an Image. Only Images of type `snapshot` and `backup` can be deleted.
     */
    deleteImagesId(req: operations.DeleteImagesIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteImagesIdResponse>;
    /**
     * Get all Images
     *
     * @remarks
     * Returns all Image objects. You can select specific Image types only and sort the results by using URI parameters.
     */
    getImages(req: operations.GetImagesRequest, config?: AxiosRequestConfig): Promise<operations.GetImagesResponse>;
    /**
     * Get an Image
     *
     * @remarks
     * Returns a specific Image object.
     */
    getImagesId(req: operations.GetImagesIdRequest, config?: AxiosRequestConfig): Promise<operations.GetImagesIdResponse>;
    /**
     * Update an Image
     *
     * @remarks
     * Updates the Image. You may change the description, convert a Backup Image to a Snapshot Image or change the Image labels. Only Images of type `snapshot` and `backup` can be updated.
     *
     * Note that when updating labels, the current set of labels will be replaced with the labels provided in the request body. So, for example, if you want to add a new label, you have to provide all existing labels plus the new label in the request body.
     *
     */
    putImagesId(req: operations.PutImagesIdRequest, config?: AxiosRequestConfig): Promise<operations.PutImagesIdResponse>;
}
