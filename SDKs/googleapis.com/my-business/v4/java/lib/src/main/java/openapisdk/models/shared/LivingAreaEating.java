package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LivingAreaEating
 * Information about eating features in the living area.
**/
public class LivingAreaEating {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("coffeeMaker")
    public Boolean coffeeMaker;
    public LivingAreaEating withCoffeeMaker(Boolean coffeeMaker) {
        this.coffeeMaker = coffeeMaker;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("coffeeMakerException")
    public LivingAreaEatingCoffeeMakerExceptionEnum coffeeMakerException;
    public LivingAreaEating withCoffeeMakerException(LivingAreaEatingCoffeeMakerExceptionEnum coffeeMakerException) {
        this.coffeeMakerException = coffeeMakerException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cookware")
    public Boolean cookware;
    public LivingAreaEating withCookware(Boolean cookware) {
        this.cookware = cookware;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cookwareException")
    public LivingAreaEatingCookwareExceptionEnum cookwareException;
    public LivingAreaEating withCookwareException(LivingAreaEatingCookwareExceptionEnum cookwareException) {
        this.cookwareException = cookwareException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dishwasher")
    public Boolean dishwasher;
    public LivingAreaEating withDishwasher(Boolean dishwasher) {
        this.dishwasher = dishwasher;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dishwasherException")
    public LivingAreaEatingDishwasherExceptionEnum dishwasherException;
    public LivingAreaEating withDishwasherException(LivingAreaEatingDishwasherExceptionEnum dishwasherException) {
        this.dishwasherException = dishwasherException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("indoorGrill")
    public Boolean indoorGrill;
    public LivingAreaEating withIndoorGrill(Boolean indoorGrill) {
        this.indoorGrill = indoorGrill;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("indoorGrillException")
    public LivingAreaEatingIndoorGrillExceptionEnum indoorGrillException;
    public LivingAreaEating withIndoorGrillException(LivingAreaEatingIndoorGrillExceptionEnum indoorGrillException) {
        this.indoorGrillException = indoorGrillException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kettle")
    public Boolean kettle;
    public LivingAreaEating withKettle(Boolean kettle) {
        this.kettle = kettle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kettleException")
    public LivingAreaEatingKettleExceptionEnum kettleException;
    public LivingAreaEating withKettleException(LivingAreaEatingKettleExceptionEnum kettleException) {
        this.kettleException = kettleException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kitchenAvailable")
    public Boolean kitchenAvailable;
    public LivingAreaEating withKitchenAvailable(Boolean kitchenAvailable) {
        this.kitchenAvailable = kitchenAvailable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kitchenAvailableException")
    public LivingAreaEatingKitchenAvailableExceptionEnum kitchenAvailableException;
    public LivingAreaEating withKitchenAvailableException(LivingAreaEatingKitchenAvailableExceptionEnum kitchenAvailableException) {
        this.kitchenAvailableException = kitchenAvailableException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("microwave")
    public Boolean microwave;
    public LivingAreaEating withMicrowave(Boolean microwave) {
        this.microwave = microwave;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("microwaveException")
    public LivingAreaEatingMicrowaveExceptionEnum microwaveException;
    public LivingAreaEating withMicrowaveException(LivingAreaEatingMicrowaveExceptionEnum microwaveException) {
        this.microwaveException = microwaveException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minibar")
    public Boolean minibar;
    public LivingAreaEating withMinibar(Boolean minibar) {
        this.minibar = minibar;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minibarException")
    public LivingAreaEatingMinibarExceptionEnum minibarException;
    public LivingAreaEating withMinibarException(LivingAreaEatingMinibarExceptionEnum minibarException) {
        this.minibarException = minibarException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outdoorGrill")
    public Boolean outdoorGrill;
    public LivingAreaEating withOutdoorGrill(Boolean outdoorGrill) {
        this.outdoorGrill = outdoorGrill;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outdoorGrillException")
    public LivingAreaEatingOutdoorGrillExceptionEnum outdoorGrillException;
    public LivingAreaEating withOutdoorGrillException(LivingAreaEatingOutdoorGrillExceptionEnum outdoorGrillException) {
        this.outdoorGrillException = outdoorGrillException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oven")
    public Boolean oven;
    public LivingAreaEating withOven(Boolean oven) {
        this.oven = oven;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ovenException")
    public LivingAreaEatingOvenExceptionEnum ovenException;
    public LivingAreaEating withOvenException(LivingAreaEatingOvenExceptionEnum ovenException) {
        this.ovenException = ovenException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("refrigerator")
    public Boolean refrigerator;
    public LivingAreaEating withRefrigerator(Boolean refrigerator) {
        this.refrigerator = refrigerator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("refrigeratorException")
    public LivingAreaEatingRefrigeratorExceptionEnum refrigeratorException;
    public LivingAreaEating withRefrigeratorException(LivingAreaEatingRefrigeratorExceptionEnum refrigeratorException) {
        this.refrigeratorException = refrigeratorException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sink")
    public Boolean sink;
    public LivingAreaEating withSink(Boolean sink) {
        this.sink = sink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sinkException")
    public LivingAreaEatingSinkExceptionEnum sinkException;
    public LivingAreaEating withSinkException(LivingAreaEatingSinkExceptionEnum sinkException) {
        this.sinkException = sinkException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("snackbar")
    public Boolean snackbar;
    public LivingAreaEating withSnackbar(Boolean snackbar) {
        this.snackbar = snackbar;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("snackbarException")
    public LivingAreaEatingSnackbarExceptionEnum snackbarException;
    public LivingAreaEating withSnackbarException(LivingAreaEatingSnackbarExceptionEnum snackbarException) {
        this.snackbarException = snackbarException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stove")
    public Boolean stove;
    public LivingAreaEating withStove(Boolean stove) {
        this.stove = stove;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stoveException")
    public LivingAreaEatingStoveExceptionEnum stoveException;
    public LivingAreaEating withStoveException(LivingAreaEatingStoveExceptionEnum stoveException) {
        this.stoveException = stoveException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("teaStation")
    public Boolean teaStation;
    public LivingAreaEating withTeaStation(Boolean teaStation) {
        this.teaStation = teaStation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("teaStationException")
    public LivingAreaEatingTeaStationExceptionEnum teaStationException;
    public LivingAreaEating withTeaStationException(LivingAreaEatingTeaStationExceptionEnum teaStationException) {
        this.teaStationException = teaStationException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("toaster")
    public Boolean toaster;
    public LivingAreaEating withToaster(Boolean toaster) {
        this.toaster = toaster;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("toasterException")
    public LivingAreaEatingToasterExceptionEnum toasterException;
    public LivingAreaEating withToasterException(LivingAreaEatingToasterExceptionEnum toasterException) {
        this.toasterException = toasterException;
        return this;
    }
}