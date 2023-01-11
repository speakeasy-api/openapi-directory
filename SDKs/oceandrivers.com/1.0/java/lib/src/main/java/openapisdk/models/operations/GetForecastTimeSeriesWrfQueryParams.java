package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetForecastTimeSeriesWrfQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=days")
    public Integer days;
    public GetForecastTimeSeriesWrfQueryParams withDays(Integer days) {
        this.days = days;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=endtime")
    public String endtime;
    public GetForecastTimeSeriesWrfQueryParams withEndtime(String endtime) {
        this.endtime = endtime;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=entryid")
    public String entryid;
    public GetForecastTimeSeriesWrfQueryParams withEntryid(String entryid) {
        this.entryid = entryid;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=hours")
    public Integer hours;
    public GetForecastTimeSeriesWrfQueryParams withHours(Integer hours) {
        this.hours = hours;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=inittime")
    public String inittime;
    public GetForecastTimeSeriesWrfQueryParams withInittime(String inittime) {
        this.inittime = inittime;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=wave")
    public String wave;
    public GetForecastTimeSeriesWrfQueryParams withWave(String wave) {
        this.wave = wave;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=weather")
    public String weather;
    public GetForecastTimeSeriesWrfQueryParams withWeather(String weather) {
        this.weather = weather;
        return this;
    }
}