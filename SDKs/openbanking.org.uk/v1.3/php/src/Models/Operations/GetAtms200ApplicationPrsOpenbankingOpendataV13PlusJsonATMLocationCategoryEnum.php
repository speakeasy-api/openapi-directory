<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/** Indicates the environment of the ATM */
enum GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonATMLocationCategoryEnum: string
{
    case AIRPORT = 'Airport';
    case BANK_SPECIALISED_OUTLET = 'BankSpecialisedOutlet';
    case BRANCH_EXTERNAL = 'BranchExternal';
    case BRANCH_INTERNAL = 'BranchInternal';
    case BRANCH_LOBBY = 'BranchLobby';
    case BUREAU_DE_CHANGE = 'BureauDeChange';
    case COACH_STATION = 'CoachStation';
    case COMMERCIAL_SPACE_INTERNAL = 'CommercialSpaceInternal';
    case CONVENIENCE_STORE = 'ConvenienceStore';
    case EXHIBITION_CENTRE = 'ExhibitionCentre';
    case FACTORY_OR_OFFICE = 'FactoryOrOffice';
    case FILLING_STATION = 'FillingStation';
    case FINANCIAL_INSTITUTION = 'FinancialInstitution';
    case GOVERNMENT_OFFICE = 'GovernmentOffice';
    case HOSPITAL = 'Hospital';
    case HOTEL = 'Hotel';
    case KIOSK_POD = 'KioskPod';
    case LEISURE_CENTRE = 'LeisureCentre';
    case PLEASURE_PARK = 'PleasurePark';
    case PUBLIC_HOUSE = 'PublicHouse';
    case RAILWAY_STATION = 'RailwayStation';
    case REMOTE_UNIT = 'RemoteUnit';
    case RETAILER_DEPARTMENT_STORE = 'RetailerDepartmentStore';
    case RETAILER_OUTLET = 'RetailerOutlet';
    case SEAPORT_TERMINAL = 'SeaportTerminal';
    case SERVICE_STATION = 'ServiceStation';
    case SHOPPING_CENTRE_EXTERNAL = 'ShoppingCentreExternal';
    case SHOPPING_CENTRE_INTERNAL = 'ShoppingCentreInternal';
    case STORAGE_DEPOT = 'StorageDepot';
    case SUPERMARKET_EXTERNAL = 'SupermarketExternal';
    case SUPERMARKET_INTERNAL = 'SupermarketInternal';
    case UNDERGROUND_RAILWAY_STATION = 'UndergroundRailwayStation';
    case UNIVERSITY_OR_COLLEGE = 'UniversityOrCollege';
}
