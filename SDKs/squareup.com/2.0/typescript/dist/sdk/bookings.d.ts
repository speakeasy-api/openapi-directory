import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Bookings {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * CancelBooking
     *
     * @remarks
     * Cancels an existing booking.
     */
    cancelBooking(req: operations.CancelBookingRequest, security: operations.CancelBookingSecurity, config?: AxiosRequestConfig): Promise<operations.CancelBookingResponse>;
    /**
     * CreateBooking
     *
     * @remarks
     * Creates a booking.
     */
    createBooking(req: shared.CreateBookingRequest, security: operations.CreateBookingSecurity, config?: AxiosRequestConfig): Promise<operations.CreateBookingResponse>;
    /**
     * ListTeamMemberBookingProfiles
     *
     * @remarks
     * Lists booking profiles for team members.
     */
    listTeamMemberBookingProfiles(req: operations.ListTeamMemberBookingProfilesRequest, security: operations.ListTeamMemberBookingProfilesSecurity, config?: AxiosRequestConfig): Promise<operations.ListTeamMemberBookingProfilesResponse>;
    /**
     * RetrieveBooking
     *
     * @remarks
     * Retrieves a booking.
     */
    retrieveBooking(req: operations.RetrieveBookingRequest, security: operations.RetrieveBookingSecurity, config?: AxiosRequestConfig): Promise<operations.RetrieveBookingResponse>;
    /**
     * RetrieveBusinessBookingProfile
     *
     * @remarks
     * Retrieves a seller's booking profile.
     */
    retrieveBusinessBookingProfile(config?: AxiosRequestConfig): Promise<operations.RetrieveBusinessBookingProfileResponse>;
    /**
     * RetrieveTeamMemberBookingProfile
     *
     * @remarks
     * Retrieves a team member's booking profile.
     */
    retrieveTeamMemberBookingProfile(req: operations.RetrieveTeamMemberBookingProfileRequest, security: operations.RetrieveTeamMemberBookingProfileSecurity, config?: AxiosRequestConfig): Promise<operations.RetrieveTeamMemberBookingProfileResponse>;
    /**
     * SearchAvailability
     *
     * @remarks
     * Searches for availabilities for booking.
     */
    searchAvailability(req: shared.SearchAvailabilityRequest, security: operations.SearchAvailabilitySecurity, config?: AxiosRequestConfig): Promise<operations.SearchAvailabilityResponse>;
    /**
     * UpdateBooking
     *
     * @remarks
     * Updates a booking.
     */
    updateBooking(req: operations.UpdateBookingRequest, security: operations.UpdateBookingSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateBookingResponse>;
}
