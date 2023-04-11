import { AccessToken } from "./accesstoken";
import { Account } from "./account";
import { Actions } from "./actions";
import { AdditionalDeviceInformation } from "./additionaldeviceinformation";
import { CustomDevice } from "./customdevice";
import { DeviceBySerial } from "./devicebyserial";
import { Devices } from "./devices";
import { DevicesByEnergy } from "./devicesbyenergy";
import { DevicesBySubType } from "./devicesbysubtype";
import { FastSendDeviceValues } from "./fastsenddevicevalues";
import { Folder } from "./folder";
import { FolderAssign } from "./folderassign";
import { FolderMenu } from "./foldermenu";
import { FolderSettings } from "./foldersettings";
import { Health } from "./health";
import { MBus } from "./mbus";
import { MeterFolderInformation } from "./meterfolderinformation";
import { MeterValues } from "./metervalues";
import { OAuth } from "./oauth";
import { Pico } from "./pico";
import { PicoCharging } from "./picocharging";
import { PicoChargingHistory } from "./picocharginghistory";
import { PicoEnableFixCableLock } from "./picoenablefixcablelock";
import { PicoLoadmanagementGroup } from "./picoloadmanagementgroup";
import { PicoLoadmanagementSetDynamicCurrent } from "./picoloadmanagementsetdynamiccurrent";
import { PicoSettings } from "./picosettings";
import { RegisterForRealtimeApi } from "./registerforrealtimeapi";
import { SmartMeDeviceConfiguration } from "./smartmedeviceconfiguration";
import { SubUser } from "./subuser";
import { User } from "./user";
import { UserToFolderAssign } from "./usertofolderassign";
import { Values } from "./values";
import { ValuesInPast } from "./valuesinpast";
import { ValuesInPastMultiple } from "./valuesinpastmultiple";
import { VirtualBillingMeterActive } from "./virtualbillingmeteractive";
import { VirtualBillingMeterDeactivate } from "./virtualbillingmeterdeactivate";
import { VirtualBillingMeters } from "./virtualbillingmeters";
import { VirtualMeterCalculateFormula } from "./virtualmetercalculateformula";
import { VirtualTariff } from "./virtualtariff";
import { VirtualTariffConsumption } from "./virtualtariffconsumption";
import { VirtualTariffsForProperty } from "./virtualtariffsforproperty";
import { VirtualTariffsStatusForProperty } from "./virtualtariffsstatusforproperty";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://smart-me.com:443"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * With the smart-me REST API you get Access to all your devices in the smart-me Cloud and you can add your own devices. So its an easy way to add the smart-me Cloud support to your Hardware or Software Product.
 */
export declare class SDK {
    accessToken: AccessToken;
    account: Account;
    actions: Actions;
    additionalDeviceInformation: AdditionalDeviceInformation;
    customDevice: CustomDevice;
    deviceBySerial: DeviceBySerial;
    devices: Devices;
    devicesByEnergy: DevicesByEnergy;
    devicesBySubType: DevicesBySubType;
    fastSendDeviceValues: FastSendDeviceValues;
    folder: Folder;
    folderAssign: FolderAssign;
    folderMenu: FolderMenu;
    folderSettings: FolderSettings;
    health: Health;
    mBus: MBus;
    meterFolderInformation: MeterFolderInformation;
    meterValues: MeterValues;
    oAuth: OAuth;
    pico: Pico;
    picoCharging: PicoCharging;
    picoChargingHistory: PicoChargingHistory;
    picoEnableFixCableLock: PicoEnableFixCableLock;
    picoLoadmanagementGroup: PicoLoadmanagementGroup;
    picoLoadmanagementSetDynamicCurrent: PicoLoadmanagementSetDynamicCurrent;
    picoSettings: PicoSettings;
    registerForRealtimeApi: RegisterForRealtimeApi;
    smartMeDeviceConfiguration: SmartMeDeviceConfiguration;
    subUser: SubUser;
    user: User;
    userToFolderAssign: UserToFolderAssign;
    values: Values;
    valuesInPast: ValuesInPast;
    valuesInPastMultiple: ValuesInPastMultiple;
    virtualBillingMeterActive: VirtualBillingMeterActive;
    virtualBillingMeterDeactivate: VirtualBillingMeterDeactivate;
    virtualBillingMeters: VirtualBillingMeters;
    virtualMeterCalculateFormula: VirtualMeterCalculateFormula;
    virtualTariff: VirtualTariff;
    virtualTariffConsumption: VirtualTariffConsumption;
    virtualTariffsForProperty: VirtualTariffsForProperty;
    virtualTariffsStatusForProperty: VirtualTariffsStatusForProperty;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
