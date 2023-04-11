import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Thermostat specific methods
 */
export declare class Thermostat {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * The method createnewschedule creates a new schedule stored in the backup list.
     */
    createnewschedule(req: operations.CreatenewscheduleRequest, security: operations.CreatenewscheduleSecurity, config?: AxiosRequestConfig): Promise<operations.CreatenewscheduleResponse>;
    /**
     * The method getmeasure returns the measurements of a device or a module.
     *
     */
    getmeasure(req: operations.GetmeasureRequest, security: operations.GetmeasureSecurity, config?: AxiosRequestConfig): Promise<operations.GetmeasureResponse>;
    /**
     * The method getthermostatsdata returns information about user's thermostats such as their last measurements.
     */
    getthermostatsdata(req: operations.GetthermostatsdataRequest, security: operations.GetthermostatsdataSecurity, config?: AxiosRequestConfig): Promise<operations.GetthermostatsdataResponse>;
    /**
     * The method setthermpoint changes the Thermostat manual temperature setpoint.
     */
    setthermpoint(req: operations.SetthermpointRequest, security: operations.SetthermpointSecurity, config?: AxiosRequestConfig): Promise<operations.SetthermpointResponse>;
    /**
     * The method switchschedule switches the Thermostat's schedule to another existing schedule.
     */
    switchschedule(req: operations.SwitchscheduleRequest, security: operations.SwitchscheduleSecurity, config?: AxiosRequestConfig): Promise<operations.SwitchscheduleResponse>;
    /**
     * The method syncschedule changes the Thermostat weekly schedule.
     */
    syncschedule(req: operations.SyncscheduleRequest, security: operations.SyncscheduleSecurity, config?: AxiosRequestConfig): Promise<operations.SyncscheduleResponse>;
}
