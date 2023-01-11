package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class WellDetail {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alteration_end_date")
    public LocalDate alterationEndDate;
    public WellDetail withAlterationEndDate(LocalDate alterationEndDate) {
        this.alterationEndDate = alterationEndDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alternative_specs_submitted")
    public Boolean alternativeSpecsSubmitted;
    public WellDetail withAlternativeSpecsSubmitted(Boolean alternativeSpecsSubmitted) {
        this.alternativeSpecsSubmitted = alternativeSpecsSubmitted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("analytic_solution_type")
    public String analyticSolutionType;
    public WellDetail withAnalyticSolutionType(String analyticSolutionType) {
        this.analyticSolutionType = analyticSolutionType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aquifer")
    public Long aquifer;
    public WellDetail withAquifer(Long aquifer) {
        this.aquifer = aquifer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aquifer_vulnerability_index")
    public String aquiferVulnerabilityIndex;
    public WellDetail withAquiferVulnerabilityIndex(String aquiferVulnerabilityIndex) {
        this.aquiferVulnerabilityIndex = aquiferVulnerabilityIndex;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("artesian_flow")
    public String artesianFlow;
    public WellDetail withArtesianFlow(String artesianFlow) {
        this.artesianFlow = artesianFlow;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("artesian_pressure")
    public String artesianPressure;
    public WellDetail withArtesianPressure(String artesianPressure) {
        this.artesianPressure = artesianPressure;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("backfill_depth")
    public String backfillDepth;
    public WellDetail withBackfillDepth(String backfillDepth) {
        this.backfillDepth = backfillDepth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("backfill_material")
    public String backfillMaterial;
    public WellDetail withBackfillMaterial(String backfillMaterial) {
        this.backfillMaterial = backfillMaterial;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("backfill_type")
    public String backfillType;
    public WellDetail withBackfillType(String backfillType) {
        this.backfillType = backfillType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bcgs_id")
    public Long bcgsId;
    public WellDetail withBcgsId(Long bcgsId) {
        this.bcgsId = bcgsId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bedrock_depth")
    public String bedrockDepth;
    public WellDetail withBedrockDepth(String bedrockDepth) {
        this.bedrockDepth = bedrockDepth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("boundary_effect")
    public String boundaryEffect;
    public WellDetail withBoundaryEffect(String boundaryEffect) {
        this.boundaryEffect = boundaryEffect;
        return this;
    }
    @JsonProperty("casing_set")
    public Casing[] casingSet;
    public WellDetail withCasingSet(Casing[] casingSet) {
        this.casingSet = casingSet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("city")
    public String city;
    public WellDetail withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comments")
    public String comments;
    public WellDetail withComments(String comments) {
        this.comments = comments;
        return this;
    }
    @JsonProperty("company_of_person_responsible")
    public OrganizationNameList companyOfPersonResponsible;
    public WellDetail withCompanyOfPersonResponsible(OrganizationNameList companyOfPersonResponsible) {
        this.companyOfPersonResponsible = companyOfPersonResponsible;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("construction_end_date")
    public LocalDate constructionEndDate;
    public WellDetail withConstructionEndDate(LocalDate constructionEndDate) {
        this.constructionEndDate = constructionEndDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("construction_start_date")
    public LocalDate constructionStartDate;
    public WellDetail withConstructionStartDate(LocalDate constructionStartDate) {
        this.constructionStartDate = constructionStartDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("coordinate_acquisition_code")
    public String coordinateAcquisitionCode;
    public WellDetail withCoordinateAcquisitionCode(String coordinateAcquisitionCode) {
        this.coordinateAcquisitionCode = coordinateAcquisitionCode;
        return this;
    }
    @JsonProperty("decommission_description_set")
    public DecommissionDescription[] decommissionDescriptionSet;
    public WellDetail withDecommissionDescriptionSet(DecommissionDescription[] decommissionDescriptionSet) {
        this.decommissionDescriptionSet = decommissionDescriptionSet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("decommission_details")
    public String decommissionDetails;
    public WellDetail withDecommissionDetails(String decommissionDetails) {
        this.decommissionDetails = decommissionDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("decommission_end_date")
    public LocalDate decommissionEndDate;
    public WellDetail withDecommissionEndDate(LocalDate decommissionEndDate) {
        this.decommissionEndDate = decommissionEndDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("decommission_method")
    public String decommissionMethod;
    public WellDetail withDecommissionMethod(String decommissionMethod) {
        this.decommissionMethod = decommissionMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("decommission_reason")
    public String decommissionReason;
    public WellDetail withDecommissionReason(String decommissionReason) {
        this.decommissionReason = decommissionReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("decommission_start_date")
    public LocalDate decommissionStartDate;
    public WellDetail withDecommissionStartDate(LocalDate decommissionStartDate) {
        this.decommissionStartDate = decommissionStartDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("development_hours")
    public String developmentHours;
    public WellDetail withDevelopmentHours(String developmentHours) {
        this.developmentHours = developmentHours;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("development_method")
    public String developmentMethod;
    public WellDetail withDevelopmentMethod(String developmentMethod) {
        this.developmentMethod = developmentMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("development_notes")
    public String developmentNotes;
    public WellDetail withDevelopmentNotes(String developmentNotes) {
        this.developmentNotes = developmentNotes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("diameter")
    public String diameter;
    public WellDetail withDiameter(String diameter) {
        this.diameter = diameter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("drawdown")
    public String drawdown;
    public WellDetail withDrawdown(String drawdown) {
        this.drawdown = drawdown;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("drilling_company")
    public String drillingCompany;
    public WellDetail withDrillingCompany(String drillingCompany) {
        this.drillingCompany = drillingCompany;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("drilling_method")
    public String drillingMethod;
    public WellDetail withDrillingMethod(String drillingMethod) {
        this.drillingMethod = drillingMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ems")
    public String ems;
    public WellDetail withEms(String ems) {
        this.ems = ems;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filter_pack_from")
    public String filterPackFrom;
    public WellDetail withFilterPackFrom(String filterPackFrom) {
        this.filterPackFrom = filterPackFrom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filter_pack_material")
    public String filterPackMaterial;
    public WellDetail withFilterPackMaterial(String filterPackMaterial) {
        this.filterPackMaterial = filterPackMaterial;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filter_pack_material_size")
    public String filterPackMaterialSize;
    public WellDetail withFilterPackMaterialSize(String filterPackMaterialSize) {
        this.filterPackMaterialSize = filterPackMaterialSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filter_pack_thickness")
    public String filterPackThickness;
    public WellDetail withFilterPackThickness(String filterPackThickness) {
        this.filterPackThickness = filterPackThickness;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filter_pack_to")
    public String filterPackTo;
    public WellDetail withFilterPackTo(String filterPackTo) {
        this.filterPackTo = filterPackTo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("final_casing_stick_up")
    public String finalCasingStickUp;
    public WellDetail withFinalCasingStickUp(String finalCasingStickUp) {
        this.finalCasingStickUp = finalCasingStickUp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("finished_well_depth")
    public String finishedWellDepth;
    public WellDetail withFinishedWellDepth(String finishedWellDepth) {
        this.finishedWellDepth = finishedWellDepth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ground_elevation")
    public String groundElevation;
    public WellDetail withGroundElevation(String groundElevation) {
        this.groundElevation = groundElevation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ground_elevation_method")
    public String groundElevationMethod;
    public WellDetail withGroundElevationMethod(String groundElevationMethod) {
        this.groundElevationMethod = groundElevationMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hydraulic_conductivity")
    public String hydraulicConductivity;
    public WellDetail withHydraulicConductivity(String hydraulicConductivity) {
        this.hydraulicConductivity = hydraulicConductivity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hydro_fracturing_performed")
    public Boolean hydroFracturingPerformed;
    public WellDetail withHydroFracturingPerformed(Boolean hydroFracturingPerformed) {
        this.hydroFracturingPerformed = hydroFracturingPerformed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hydro_fracturing_yield_increase")
    public String hydroFracturingYieldIncrease;
    public WellDetail withHydroFracturingYieldIncrease(String hydroFracturingYieldIncrease) {
        this.hydroFracturingYieldIncrease = hydroFracturingYieldIncrease;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id_plate_attached_by")
    public String idPlateAttachedBy;
    public WellDetail withIdPlateAttachedBy(String idPlateAttachedBy) {
        this.idPlateAttachedBy = idPlateAttachedBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("identification_plate_number")
    public Long identificationPlateNumber;
    public WellDetail withIdentificationPlateNumber(Long identificationPlateNumber) {
        this.identificationPlateNumber = identificationPlateNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("intended_water_use")
    public String intendedWaterUse;
    public WellDetail withIntendedWaterUse(String intendedWaterUse) {
        this.intendedWaterUse = intendedWaterUse;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("land_district")
    public String landDistrict;
    public WellDetail withLandDistrict(String landDistrict) {
        this.landDistrict = landDistrict;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latitude")
    public String latitude;
    public WellDetail withLatitude(String latitude) {
        this.latitude = latitude;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("legal_block")
    public String legalBlock;
    public WellDetail withLegalBlock(String legalBlock) {
        this.legalBlock = legalBlock;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("legal_district_lot")
    public String legalDistrictLot;
    public WellDetail withLegalDistrictLot(String legalDistrictLot) {
        this.legalDistrictLot = legalDistrictLot;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("legal_lot")
    public String legalLot;
    public WellDetail withLegalLot(String legalLot) {
        this.legalLot = legalLot;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("legal_pid")
    public Long legalPid;
    public WellDetail withLegalPid(Long legalPid) {
        this.legalPid = legalPid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("legal_plan")
    public String legalPlan;
    public WellDetail withLegalPlan(String legalPlan) {
        this.legalPlan = legalPlan;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("legal_range")
    public String legalRange;
    public WellDetail withLegalRange(String legalRange) {
        this.legalRange = legalRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("legal_section")
    public String legalSection;
    public WellDetail withLegalSection(String legalSection) {
        this.legalSection = legalSection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("legal_township")
    public String legalTownship;
    public WellDetail withLegalTownship(String legalTownship) {
        this.legalTownship = legalTownship;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("licenced_status")
    public String licencedStatus;
    public WellDetail withLicencedStatus(String licencedStatus) {
        this.licencedStatus = licencedStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("liner_diameter")
    public String linerDiameter;
    public WellDetail withLinerDiameter(String linerDiameter) {
        this.linerDiameter = linerDiameter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("liner_from")
    public String linerFrom;
    public WellDetail withLinerFrom(String linerFrom) {
        this.linerFrom = linerFrom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("liner_material")
    public String linerMaterial;
    public WellDetail withLinerMaterial(String linerMaterial) {
        this.linerMaterial = linerMaterial;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("liner_thickness")
    public String linerThickness;
    public WellDetail withLinerThickness(String linerThickness) {
        this.linerThickness = linerThickness;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("liner_to")
    public String linerTo;
    public WellDetail withLinerTo(String linerTo) {
        this.linerTo = linerTo;
        return this;
    }
    @JsonProperty("linerperforation_set")
    public LinerPerforation[] linerperforationSet;
    public WellDetail withLinerperforationSet(LinerPerforation[] linerperforationSet) {
        this.linerperforationSet = linerperforationSet;
        return this;
    }
    @JsonProperty("lithologydescription_set")
    public LithologyDescription[] lithologydescriptionSet;
    public WellDetail withLithologydescriptionSet(LithologyDescription[] lithologydescriptionSet) {
        this.lithologydescriptionSet = lithologydescriptionSet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("longitude")
    public String longitude;
    public WellDetail withLongitude(String longitude) {
        this.longitude = longitude;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("observation_well_number")
    public String observationWellNumber;
    public WellDetail withObservationWellNumber(String observationWellNumber) {
        this.observationWellNumber = observationWellNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("observation_well_status")
    public String observationWellStatus;
    public WellDetail withObservationWellStatus(String observationWellStatus) {
        this.observationWellStatus = observationWellStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("other_drilling_method")
    public String otherDrillingMethod;
    public WellDetail withOtherDrillingMethod(String otherDrillingMethod) {
        this.otherDrillingMethod = otherDrillingMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("other_screen_bottom")
    public String otherScreenBottom;
    public WellDetail withOtherScreenBottom(String otherScreenBottom) {
        this.otherScreenBottom = otherScreenBottom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("other_screen_material")
    public String otherScreenMaterial;
    public WellDetail withOtherScreenMaterial(String otherScreenMaterial) {
        this.otherScreenMaterial = otherScreenMaterial;
        return this;
    }
    @JsonProperty("owner_full_name")
    public String ownerFullName;
    public WellDetail withOwnerFullName(String ownerFullName) {
        this.ownerFullName = ownerFullName;
        return this;
    }
    @JsonProperty("person_responsible")
    public PersonBasic personResponsible;
    public WellDetail withPersonResponsible(PersonBasic personResponsible) {
        this.personResponsible = personResponsible;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recommended_pump_depth")
    public String recommendedPumpDepth;
    public WellDetail withRecommendedPumpDepth(String recommendedPumpDepth) {
        this.recommendedPumpDepth = recommendedPumpDepth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recommended_pump_rate")
    public String recommendedPumpRate;
    public WellDetail withRecommendedPumpRate(String recommendedPumpRate) {
        this.recommendedPumpRate = recommendedPumpRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("screen_bottom")
    public String screenBottom;
    public WellDetail withScreenBottom(String screenBottom) {
        this.screenBottom = screenBottom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("screen_information")
    public String screenInformation;
    public WellDetail withScreenInformation(String screenInformation) {
        this.screenInformation = screenInformation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("screen_intake_method")
    public String screenIntakeMethod;
    public WellDetail withScreenIntakeMethod(String screenIntakeMethod) {
        this.screenIntakeMethod = screenIntakeMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("screen_material")
    public String screenMaterial;
    public WellDetail withScreenMaterial(String screenMaterial) {
        this.screenMaterial = screenMaterial;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("screen_opening")
    public String screenOpening;
    public WellDetail withScreenOpening(String screenOpening) {
        this.screenOpening = screenOpening;
        return this;
    }
    @JsonProperty("screen_set")
    public Screen[] screenSet;
    public WellDetail withScreenSet(Screen[] screenSet) {
        this.screenSet = screenSet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("screen_type")
    public String screenType;
    public WellDetail withScreenType(String screenType) {
        this.screenType = screenType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sealant_material")
    public String sealantMaterial;
    public WellDetail withSealantMaterial(String sealantMaterial) {
        this.sealantMaterial = sealantMaterial;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("specific_storage")
    public String specificStorage;
    public WellDetail withSpecificStorage(String specificStorage) {
        this.specificStorage = specificStorage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("specific_yield")
    public String specificYield;
    public WellDetail withSpecificYield(String specificYield) {
        this.specificYield = specificYield;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("static_level_before_test")
    public String staticLevelBeforeTest;
    public WellDetail withStaticLevelBeforeTest(String staticLevelBeforeTest) {
        this.staticLevelBeforeTest = staticLevelBeforeTest;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("static_water_level")
    public String staticWaterLevel;
    public WellDetail withStaticWaterLevel(String staticWaterLevel) {
        this.staticWaterLevel = staticWaterLevel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("storativity")
    public String storativity;
    public WellDetail withStorativity(String storativity) {
        this.storativity = storativity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("street_address")
    public String streetAddress;
    public WellDetail withStreetAddress(String streetAddress) {
        this.streetAddress = streetAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("surface_seal_depth")
    public String surfaceSealDepth;
    public WellDetail withSurfaceSealDepth(String surfaceSealDepth) {
        this.surfaceSealDepth = surfaceSealDepth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("surface_seal_length")
    public String surfaceSealLength;
    public WellDetail withSurfaceSealLength(String surfaceSealLength) {
        this.surfaceSealLength = surfaceSealLength;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("surface_seal_material")
    public String surfaceSealMaterial;
    public WellDetail withSurfaceSealMaterial(String surfaceSealMaterial) {
        this.surfaceSealMaterial = surfaceSealMaterial;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("surface_seal_method")
    public String surfaceSealMethod;
    public WellDetail withSurfaceSealMethod(String surfaceSealMethod) {
        this.surfaceSealMethod = surfaceSealMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("surface_seal_thickness")
    public String surfaceSealThickness;
    public WellDetail withSurfaceSealThickness(String surfaceSealThickness) {
        this.surfaceSealThickness = surfaceSealThickness;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("testing_duration")
    public Long testingDuration;
    public WellDetail withTestingDuration(Long testingDuration) {
        this.testingDuration = testingDuration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("testing_method")
    public String testingMethod;
    public WellDetail withTestingMethod(String testingMethod) {
        this.testingMethod = testingMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_depth_drilled")
    public String totalDepthDrilled;
    public WellDetail withTotalDepthDrilled(String totalDepthDrilled) {
        this.totalDepthDrilled = totalDepthDrilled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transmissivity")
    public String transmissivity;
    public WellDetail withTransmissivity(String transmissivity) {
        this.transmissivity = transmissivity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("utm_easting")
    public Long utmEasting;
    public WellDetail withUtmEasting(Long utmEasting) {
        this.utmEasting = utmEasting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("utm_northing")
    public Long utmNorthing;
    public WellDetail withUtmNorthing(Long utmNorthing) {
        this.utmNorthing = utmNorthing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("utm_zone_code")
    public String utmZoneCode;
    public WellDetail withUtmZoneCode(String utmZoneCode) {
        this.utmZoneCode = utmZoneCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("water_quality_characteristics")
    public String[] waterQualityCharacteristics;
    public WellDetail withWaterQualityCharacteristics(String[] waterQualityCharacteristics) {
        this.waterQualityCharacteristics = waterQualityCharacteristics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("water_quality_colour")
    public String waterQualityColour;
    public WellDetail withWaterQualityColour(String waterQualityColour) {
        this.waterQualityColour = waterQualityColour;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("water_quality_odour")
    public String waterQualityOdour;
    public WellDetail withWaterQualityOdour(String waterQualityOdour) {
        this.waterQualityOdour = waterQualityOdour;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("water_supply_system_name")
    public String waterSupplySystemName;
    public WellDetail withWaterSupplySystemName(String waterSupplySystemName) {
        this.waterSupplySystemName = waterSupplySystemName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("water_supply_system_well_name")
    public String waterSupplySystemWellName;
    public WellDetail withWaterSupplySystemWellName(String waterSupplySystemWellName) {
        this.waterSupplySystemWellName = waterSupplySystemWellName;
        return this;
    }
    @JsonProperty("well")
    public Long well;
    public WellDetail withWell(Long well) {
        this.well = well;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("well_cap_type")
    public String wellCapType;
    public WellDetail withWellCapType(String wellCapType) {
        this.wellCapType = wellCapType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("well_class")
    public String wellClass;
    public WellDetail withWellClass(String wellClass) {
        this.wellClass = wellClass;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("well_disinfected")
    public Boolean wellDisinfected;
    public WellDetail withWellDisinfected(Boolean wellDisinfected) {
        this.wellDisinfected = wellDisinfected;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("well_guid")
    public String wellGuid;
    public WellDetail withWellGuid(String wellGuid) {
        this.wellGuid = wellGuid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("well_identification_plate_attached")
    public String wellIdentificationPlateAttached;
    public WellDetail withWellIdentificationPlateAttached(String wellIdentificationPlateAttached) {
        this.wellIdentificationPlateAttached = wellIdentificationPlateAttached;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("well_location_description")
    public String wellLocationDescription;
    public WellDetail withWellLocationDescription(String wellLocationDescription) {
        this.wellLocationDescription = wellLocationDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("well_orientation")
    public Boolean wellOrientation;
    public WellDetail withWellOrientation(Boolean wellOrientation) {
        this.wellOrientation = wellOrientation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("well_status")
    public String wellStatus;
    public WellDetail withWellStatus(String wellStatus) {
        this.wellStatus = wellStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("well_subclass")
    public String wellSubclass;
    public WellDetail withWellSubclass(String wellSubclass) {
        this.wellSubclass = wellSubclass;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("well_tag_number")
    public Long wellTagNumber;
    public WellDetail withWellTagNumber(Long wellTagNumber) {
        this.wellTagNumber = wellTagNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("well_yield")
    public String wellYield;
    public WellDetail withWellYield(String wellYield) {
        this.wellYield = wellYield;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("well_yield_unit")
    public String wellYieldUnit;
    public WellDetail withWellYieldUnit(String wellYieldUnit) {
        this.wellYieldUnit = wellYieldUnit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("yield_estimation_duration")
    public String yieldEstimationDuration;
    public WellDetail withYieldEstimationDuration(String yieldEstimationDuration) {
        this.yieldEstimationDuration = yieldEstimationDuration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("yield_estimation_method")
    public String yieldEstimationMethod;
    public WellDetail withYieldEstimationMethod(String yieldEstimationMethod) {
        this.yieldEstimationMethod = yieldEstimationMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("yield_estimation_rate")
    public String yieldEstimationRate;
    public WellDetail withYieldEstimationRate(String yieldEstimationRate) {
        this.yieldEstimationRate = yieldEstimationRate;
        return this;
    }
}