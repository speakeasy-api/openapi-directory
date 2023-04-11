import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Definitions and configuration for the CRM cards your app can display.
 */
export declare class Cards {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete a card
     *
     * @remarks
     * Permanently deletes a card definition with the given ID. Once deleted, data fetch requests for this card will no longer be sent to your service. This can't be undone.
     */
    deleteCrmV3ExtensionsCardsAppIdCardIdArchive(req: operations.DeleteCrmV3ExtensionsCardsAppIdCardIdArchiveRequest, security: operations.DeleteCrmV3ExtensionsCardsAppIdCardIdArchiveSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteCrmV3ExtensionsCardsAppIdCardIdArchiveResponse>;
    /**
     * Get a card.
     *
     * @remarks
     * Returns the definition for a card with the given ID.
     */
    getCrmV3ExtensionsCardsAppIdCardIdGetById(req: operations.GetCrmV3ExtensionsCardsAppIdCardIdGetByIdRequest, security: operations.GetCrmV3ExtensionsCardsAppIdCardIdGetByIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetCrmV3ExtensionsCardsAppIdCardIdGetByIdResponse>;
    /**
     * Get all cards
     *
     * @remarks
     * Returns a list of cards for a given app.
     */
    getCrmV3ExtensionsCardsAppIdGetAll(req: operations.GetCrmV3ExtensionsCardsAppIdGetAllRequest, security: operations.GetCrmV3ExtensionsCardsAppIdGetAllSecurity, config?: AxiosRequestConfig): Promise<operations.GetCrmV3ExtensionsCardsAppIdGetAllResponse>;
    /**
     * Update a card
     *
     * @remarks
     * Update a card definition with new details.
     */
    patchCrmV3ExtensionsCardsAppIdCardIdUpdate(req: operations.PatchCrmV3ExtensionsCardsAppIdCardIdUpdateRequest, security: operations.PatchCrmV3ExtensionsCardsAppIdCardIdUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.PatchCrmV3ExtensionsCardsAppIdCardIdUpdateResponse>;
    /**
     * Create a new card
     *
     * @remarks
     * Defines a new card that will become active on an account when this app is installed.
     */
    postCrmV3ExtensionsCardsAppIdCreate(req: operations.PostCrmV3ExtensionsCardsAppIdCreateRequest, security: operations.PostCrmV3ExtensionsCardsAppIdCreateSecurity, config?: AxiosRequestConfig): Promise<operations.PostCrmV3ExtensionsCardsAppIdCreateResponse>;
}
